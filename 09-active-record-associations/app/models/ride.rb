class Ride < ActiveRecord::Base 
    belongs_to :subway
    belongs_to :passenger
end