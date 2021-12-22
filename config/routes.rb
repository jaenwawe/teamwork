Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout/:id", to: "sessions#destroy"
  get "/me", to: "users#show"
  
  
  resources :solutions
  resources :challenges
  resources :users, only: [:show, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
