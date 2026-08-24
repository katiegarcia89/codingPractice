CREATE TABLE Products (
    Id INT AUTO_INCREMENT PRIMARY KEY, 
    Name VARCHAR(50) NOT NULL, 
    Price INT NOT NULL
); 

INSERT INTO Products (Name, Price)
VALUES ("Keyboard", 45),
       ("Mouse", 20), 
       ("Monitor", 180),
       ("Headphones", 70), 
       ("Cable", 10);