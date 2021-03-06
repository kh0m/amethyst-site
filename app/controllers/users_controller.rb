class UsersController < ApplicationController
  before_action :require_user, only: [:index, :show]

  def show
    @user = User.find(params[:id])
    if @user.id != current_user.id
      redirect_to "/users/#{current_user.id}" unless ( current_user.manager? || current_user.admin? )
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def update
    @user = User.find(params[:id])
    if ( @user.update_attribute(:course_ids, params[:user][:courses]) && @user.update_attribute(:role, params[:user][:role]))
      redirect_to @user
    else
      render 'edit'
    end
  end


  private
    def user_params
      params.require(:user).permit(:id, :email)
    end
end
