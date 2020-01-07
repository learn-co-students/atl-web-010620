require 'pry'

# Lyn is a big fan of collecting, sorting, 
# and using crystals. 
#
# We're going to create a class that allows Lyn 
# to create and give attributes to new crystals. 

# Deliverables
# -------------
#
# 1. Create a set of crystals that each have 
# a healing property, color, and rarity. 
#
# 2. Refactor using attr_ macros. 

class Crystal
    attr_accessor :property, :color

    def initialize(property, color, rarity)
        @property = property
        @color = color
        @rarity = rarity
    end

end

lepidolite = Crystal.new("stress relief", "purple", "common")
ruby = Crystal.new("idk", "red", "common")


binding.pry