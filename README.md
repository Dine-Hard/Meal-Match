# Meal-Match 
Database Documention

Structure and Design
- We chose to use SQL as our database so that we would have the option to have multiple foreign keys in the future
    - For example, for our MVP we have just provided a list of the top 10 ethinic cuisines and American for the sample list for the enduser to choose from
    - However, we could get more specific in the future by providing broader categories, such as Asian, Latin, European, etc and then allow the enduser to drill into those to select from a broader range of cuisines. This would require multiple tables (one for the general categoies, one for the each region's cuisine) and foreign keys to connect them

Outstanding challenges:
- Charmie created the database, and we are in the process of trying to figure out how to make it so multiple people can edit and run queries - X (I've now been made admin on her database)
- we are trying to create a second table to hold the results: CREATE TABLE votes ( vote_id SERIAL PRIMARY KEY,   cuisine_id INTEGER REFERENCES cuisines(cuisine_id),   ip_address VARCHAR(15) NOT NULL,   timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP );

but we're getting an error

- insert ER Diagram photo