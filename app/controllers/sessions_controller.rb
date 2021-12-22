class SessionsController < ApplicationController

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: { error: 'invalid credentials' }, status: :unauthorized
        end
      end



      def destroy
        if current_user
          session.delete :user_id
        else
          render json: { error: 'no active session'}, status: :unprocessable_entity
        end
      end
    end