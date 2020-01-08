require 'pry'

require_relative './tweet'
require_relative './user'

lyn = User.new("Lyn")
trey = User.new("Trey")

tweet1 = Tweet.new("Ruby is beautiful.", lyn)
tweet2 = Tweet.new("Ruby is amazing.", trey)
tweet3 = Tweet.new("Ruby can be fun!", lyn)
tweet4 = Tweet.new("Dogs are cool.", trey)

binding.pry