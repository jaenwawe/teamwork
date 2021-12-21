class ChallengesController < ApplicationController
    def index    
        render json: Challenge.all
      end
   
end
