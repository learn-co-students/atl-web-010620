class Person
  # attr_accessor :name
  def initialize(name)
    @name = name
  end

  def Person.say_something
    puts "I am a class method defined on the #{self} class."
  end

  def name
    self???
    @name
  end
end

Person.say_something # => self will be Person class
# self in ruby is the receiver of a method
#
andy = Person.new('andy')
andy.name


# => self ?
# (self will be the instance)
# andy (instance) is receiving the method call
