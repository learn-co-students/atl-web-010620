# Allergen Lab Review: 

### Schema: 
User  -<  Recipe -<  RecipeIngredient  >- Ingredient   
User -< Allergy >- Ingredient 

### User 
- first_naame
- last_name 

### Recipe 
- title 
- user_id 

### RecipeIngredient 
- recipe_id 
- quantity 
- unit
- ingredient_id 

### Ingredient 
- name  

### Allergy 
- user_id
- ingredient_id 

### Workflow 

Setup application structure: 
1. rails new 
2. rails g model model_name last_name:string 
3. rails g controller model_name index new create show

Edit routes, models, controllers:
1. Check if routes.rb file is correct. Adjust accordingly.
2. Edit models, add associations, and/or validations.
3. Edit your controllers to implement appropriate actions and logic. 
4. Check that your views contain and render appropriately.
5. Repeat steps starting at `rails g model` 
6. Remind yourself that you are an awesome dev... humbly speaking. 💯

