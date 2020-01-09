require 'pry'
require 'faker'

require_relative "./ingredient"
require_relative "./recipe"
require_relative "./recipeingredient"

puts "Creating seed data... one moment please."

5.times do
    Ingredient.new(Faker::Food.ingredient, Faker::Food.measurement)
end

puts "I've finished adding ingredients. Adding recipes... one moment please."

5.times do
    Recipe.new(Faker::Food.dish, Faker::Food.description)
end

# to add seed data for recipe ingredients, Mitch was right- we can add complexity by 
# adding a randomizer to choose between the 5 random selections, or write out by hand.
# here we are pulling the index of the created instance of both Recipe and Ingredient and
# assigning them as variables. 

tasty_treat = RecipeIngredient.new(Recipe.all[1], Ingredient.all[4])
yummy_timez = RecipeIngredient.new(Recipe.all[2], Ingredient.all[3])


puts "All done! Your program has been seeded."
binding.pry