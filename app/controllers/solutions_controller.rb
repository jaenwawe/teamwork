class SolutionsController < ApplicationController
   def index    
     render json: Solution.all
   end




end
