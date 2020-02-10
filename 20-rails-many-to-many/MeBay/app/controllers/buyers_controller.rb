class BuyersController < ApplicationController

  def index
    @buyers = Buyer.all 
  end

  def create
    @buyer = Buyer.new(buyer_params)
      if buyer.save
        redirect_to @buyer
      else 
        render 'new'
      end
  end

  def new
    @buyer = Buyer.new
  end

  def edit
    @buyer = Buyer.find(params[:id])
  end

  def show
    @buyer = Buyer.find(params[:id])
  end

  def update
    @buyer = Buyer.find(params[:id])
    @buyer.update(buyer_params)
    redirect_to buyers_path
  end

  def destroy
    @buyer = Buyer.find(params[:id])
    @buyer.destroy
    redirect_to buyers_path
  end

  private

  def buyer_params
    params.require(:buyer).permit(:name)
  end
end
