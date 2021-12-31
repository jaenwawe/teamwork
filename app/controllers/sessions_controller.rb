class SessionsController < ApplicationController

    # def create
    #     user = User.find_by_email(params[:email])
    #     if user&.authenticate(params[:password])
    #       session[:user_id] = user.id
    #       render json: user, status: :ok
    #     else
    #       render json: { error: 'invalid credentials' }, status: :unauthorized
    #     end
    #   end




    def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end




      def destroy
          session.delete :user_id
      end
    end