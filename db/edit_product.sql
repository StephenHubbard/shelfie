UPDATE products
SET
name = $1, 
image = $2,
price = $3
WHERE id = $4;