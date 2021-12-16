class ApplicationController < ActionController::API
    include ActionController::Cookies


    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
    
    private

    def current_user
      @current_user ||= User.find_by_id(session[:user_id])
    end
  end
