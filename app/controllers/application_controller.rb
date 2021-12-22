class ApplicationController < ActionController::API
    include ActionController::Cookies

    # before_action :confirm_authentication


    private	  

    def authorize
      @current_user = User.find_by_id(session[:user_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def current_user	
     @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
    end
  
    def confirm_authentication
      render json: { error: "You must be logged in to do that." }, status: :unauthorized unless current_user
    end	  
  end	
  




















 
    
