require 'pry'

class Person
  attr_accessor :name, :fav_color

  def initialize(name, fav_color)
    @name = name
    @fav_color = fav_color
  end

  def showInfo
    puts "#{@name}'s favorite color is #{@fav_color}!!"
  end
end

john = Person.new('John','red')
danny = Person.new('Dan', 'green')
joey = Person.new('Joey', 'blue')

binding.pry
