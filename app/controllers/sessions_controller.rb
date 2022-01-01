class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok

    else
      render json: { error: 'invalid credentials' }, status: :unauthorized
    end
  end

  def is_logged_in?
    @current_user = User.find(session[:user_id]) if session[:user_id]
    if @current_user
      render json: {
        logged_in: true,
        user: UserSerializer.new(@current_user)
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end


  private
    def session_params
        params.require(:user).permit(:username, :password)
    end

   
end