class Product < ApplicationRecord
  belongs_to :buyer
  belongs_to :seller

  def sales
   Product.all.select{ 
     |product| product.name = self.name
   }.count
  end

end
