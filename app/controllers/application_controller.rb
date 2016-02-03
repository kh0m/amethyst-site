class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_email(session[:userinfo].info.email) if session[:userinfo]
  end

  def require_user
    redirect_to '/' unless current_user
  end

  def require_specific_user(id)
    redirect_to '/' unless current_user.id == id
  end

  def require_manager
    redirect_to '/' unless current_user.manager?
  end

  def require_admin
    redirect_to '/' unless current_user.admin?
  end

end
