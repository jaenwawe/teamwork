class ChallengesController < ApplicationController
    def index    
        render json: Challenge.all
      end

      def show
        challenge = Challenge.find(params[:id])
        render json: challenge
      end

def create
     new_challenge = Challenge.new(challenge_params)
    if new_challenge.save
      render json: new_challenge, status: :created
    else render json: new_challenge.errors.full_messages, status: :unprocessable_entity
    end
  end
  private

  def authorize
    @current_user = User.find_by_id(session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def challenge_params
    params.permit(:title, :question)
  end
    
end
