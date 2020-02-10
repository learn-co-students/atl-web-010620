# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Seller.destroy_all 
Buyer.destroy_all
Product.destroy_all

p "Refreshed database- loading new data..."

require 'faker'

5.times do
    Seller.create(name: Faker::Name.name)
end

p "Added sellers..."

5.times do
    Buyer.create(name: Faker::Name.name )
end

p "Added buyers..."

5.times do
    Product.create(name: 
        Faker::Name.last_name, seller_id: Faker::Number.between(from: 1, to: 5), buyer_id: Faker::Number.between(from: 1, to: 5))
end

p "Added products...seeding all done."