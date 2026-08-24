#!/usr/bin/env bash

# Run one week of coding-practice solutions in all six languages.
# Usage: ./run-week.sh 1

set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEEK_NUMBER="${1:-}"
README_FILE="$SCRIPT_DIR/README.md"

if [[ -z "$WEEK_NUMBER" ]]; then
    echo "Usage: ./run-week.sh <week-number>"
    echo "Example: ./run-week.sh 2"
    exit 1
fi

WEEK_DIR="$SCRIPT_DIR/week$WEEK_NUMBER"

if [[ ! -d "$WEEK_DIR" ]]; then
    echo "Error: week$WEEK_NUMBER does not exist."
    exit 1
fi

TEMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TEMP_DIR"' EXIT

FAILED_LANGUAGES=()

print_heading() {
    echo
    echo "=================================================="
    echo "$1"
    echo "=================================================="
}

command_available() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "Skipped: '$1' is not installed or is not available."
        return 1
    fi
}

record_failure() {
    FAILED_LANGUAGES+=("$1")
    echo "$1 did not run successfully."
}

print_heading "WEEK $WEEK_NUMBER PROBLEMS"

if [[ -f "$README_FILE" ]]; then
    awk -v week_heading="### Week $WEEK_NUMBER" '
        $0 == week_heading {
            printing = 1
        }

        printing && $0 ~ /^### Week [0-9]+$/ && $0 != week_heading {
            exit
        }

        printing && $0 ~ /^## / {
            exit
        }

        printing {
            print
        }
    ' "$README_FILE"
else
    echo "README.md was not found."
fi

print_heading "JAVASCRIPT RESULTS"

if command_available node; then
    if ! node "$WEEK_DIR/codingPractice.js"; then
        record_failure "JavaScript"
    fi
fi

print_heading "PYTHON RESULTS"

if command_available python3; then
    if ! python3 "$WEEK_DIR/codingPractice.py"; then
        record_failure "Python"
    fi
fi

print_heading "JAVA RESULTS"

if command_available javac && command_available java; then
    JAVA_OUTPUT="$TEMP_DIR/java"
    mkdir -p "$JAVA_OUTPUT"

    if javac -d "$JAVA_OUTPUT" "$WEEK_DIR/codingPractice.java"; then
        if ! java -cp "$JAVA_OUTPUT" codingPractice; then
            record_failure "Java"
        fi
    else
        record_failure "Java"
    fi
fi

print_heading "C# RESULTS"

if command_available dotnet; then
    if ! dotnet run --file "$WEEK_DIR/codingPractice.cs"; then
        record_failure "C#"
    fi
fi

print_heading "C++ RESULTS"

if command_available g++; then
    CPP_OUTPUT="$TEMP_DIR/codingPractice"

    if g++ "$WEEK_DIR/codingPractice.cpp" -o "$CPP_OUTPUT"; then
        if ! "$CPP_OUTPUT"; then
            record_failure "C++"
        fi
    else
        record_failure "C++"
    fi
fi

print_heading "PHP RESULTS"

if command_available php; then
    if ! php "$WEEK_DIR/codingPractice.php"; then
        record_failure "PHP"
    fi
fi

print_heading "RUN COMPLETE"

if [[ ${#FAILED_LANGUAGES[@]} -eq 0 ]]; then
    echo "All available language solutions ran successfully."
else
    echo "These languages encountered an error:"
    printf '  - %s\n' "${FAILED_LANGUAGES[@]}"
fi
