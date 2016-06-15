class Auth0Controller < ApplicationController
  def callback
    # This stores all the user information that came from Auth0
    # and the IdP
    session[:userinfo] = request.env['omniauth.auth']
    data = session[:userinfo]
    email = data.info.email

    user = User.find_by_email(email) ? User.find_by_email(email) : User.create(email: "#{email}", role: "admin")

    # redirect to the URL you want after successfull auth
    redirect_to "/users/#{user.id}"
  end

  def failure
    # show a failure page or redirect to an error page
    @error_msg = request.params['message']
  end

  def destroy
    session[:userinfo] = nil
    redirect_to "https://pinsonault.auth0.com/v2/logout?returnTo=#{request.base_url + home_index_path}"
  end
end
