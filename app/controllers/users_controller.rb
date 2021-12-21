class UsersController < ApplicationController
  before_action :set_user, except: [:create]




  # def index    
  #   render json: User.all, each_serializer: UserSerializer  
  # end


      def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: { error: 'No active session' }, status: :unauthorized
        end
      end


      def create
        # user = User.new(user_params)
          user = User.create!(user_params)
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
      end

    private

    def user_params
      params.permit(:username, :password, :first_name, :email, :bio, :avatar_url)
    end
  
    def set_user
      @user = User.find(params[:id])
    end
  
    def authorize_user
      @event.user == current_user
      if !user_can_modify
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden
      end
    end
end
