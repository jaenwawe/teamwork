class SolutionsController < ApplicationController
  before_action :authorize

  def index    
    render json: Solution.all
  end


   def create
    new_solution = Solution.new(solution_params)
    if new_solution.save
      render json: new_solution, status: :created
    else render json: new_solution.errors.full_messages,status: :unprocessable_entity
    end
  end
      
private

  def solution_params
    params.permit(:user_id, :challenge_id, :explaination, :hints, :questions)
  end

  def authorize
    @current_user = User.find_by_id(session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

end