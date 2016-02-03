class UsersController < ApplicationController
  before_action :require_user, only: [:index, :show]

  def show
    @user = User.find(params[:id])
    redirect_to "/users/#{current_user.id}" if @user.id != current_user.id
  end

  def update
    @user = User.find(params[:id])
  end


  private
    def user_params
      params.require(:user).permit(:id,:email)
    end
end
