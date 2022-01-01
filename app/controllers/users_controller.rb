class UsersController < ApplicationController
  before_action :authorize, only: [:index]

  def index    
    render json: User.all
  end

  def show
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
    else 
      render json: new_user.error.full_messages,status: :unprocessable_entity
    end
  end



      
private

def authorize
  @current_user = User.find_by_id(session[:user_id])

  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
end

  def user_params
    params.permit(:username, :password, :first_name, :bio)
  end

  def set_user
    @user = User.find(params[:id])
  end

end