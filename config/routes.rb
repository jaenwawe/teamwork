Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
  
  resources :solutions, except: [:update, :delete]
  resources :challenges, except: [:update, :delete]
  resources :users, only: [:show, :create]
end
