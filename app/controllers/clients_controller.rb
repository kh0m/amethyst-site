class ClientsController < ApplicationController
  def index
    @clients = Client.all
  end

  def show
    @client = Client.find(params[:id])
  end

  def new
    @client = Client.new
  end

  def edit
    @client = Client.find(params[:id])
  end

  def create
    @client = Client.create(client_params)
    if @client.save
      redirect_to @client
    else
      render 'new'
    end
  end

  def destroy
    @client = Client.find(params[:id])
    @client.courses.each do |course|
      course.destroy
    end
    @client.destroy
    redirect_to clients_path
  end

  private
    def client_params
      params.require(:client).permit(:name)
    end


end
