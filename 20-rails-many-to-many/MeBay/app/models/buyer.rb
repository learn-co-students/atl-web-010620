class Buyer < ApplicationRecord
    has_many :products
    has_many :sellers, through: :products
end
