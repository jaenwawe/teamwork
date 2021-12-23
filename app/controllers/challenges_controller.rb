class ChallengesController < ApplicationController
    def index    
        render json: Challenge.all
      end

      def delete    
        render json: Challenge.all
      end
end
