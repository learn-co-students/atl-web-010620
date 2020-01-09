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


puts "All done! Your program has been seeded."
binding.pry