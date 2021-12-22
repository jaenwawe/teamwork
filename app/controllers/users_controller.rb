class UsersController < ApplicationController
  before_action :set_user, only: [:index, :show]




  def index    
    render json: User.all
  end


      def show

        # useEffects in APP persist login   if session cookie  refetch
          if current_user
            render json: current_user, status: :ok
          else
            render json: { error: 'No active session' }, status: :unauthorized
          end
      end


      def create
        new_user = User.new(user_params)
        if new_user.save
          session[:user_id] = new_user.id
          render json: new_user, status: :created
        else render json: new_user.error.full_messages,status: :unprocessable_entity
          end
      end
        
      
    private

    def user_params
      params.permit(:id,:username, :password, :first_name, :email, :bio, :avatar_url)
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
