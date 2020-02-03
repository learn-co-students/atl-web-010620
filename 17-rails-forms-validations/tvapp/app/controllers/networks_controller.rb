class NetworksController < ApplicationController

  def index
    @networks = Network.all 
  end

  def create
    @network = Network.new
    if network.save
      redirect_to @network
    else 
      render 'new'
    end
  end

  def new
      @network = Network.new
  end

  def edit
    @network = Network.find(params[:id])
    
  end

  def show
    @network = Network.find(params[:id])
  end

  def update
    @network = Network.find(params[:id])
    @network.update(params[:id])

    redirect_to network_path(@network)
  end

  def destroy
    @network = Network.find(params[:id])
    @network.destroy

    redirect_to networks_path
  end

  private 

  def network_params
    params.require(:network).permit(:name, :channel)
  end

end
