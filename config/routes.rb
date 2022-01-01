Rails.application.routes.draw do
  
  
  
  resources :users, only: [:create]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
 
  get '/logged_in', to: 'sessions#is_logged_in?'

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  

  resources :solutions, except: [:update, :delete]
  resources :challenges, except: [:update, :delete]
  
end
