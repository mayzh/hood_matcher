Rails.application.routes.draw do
  root to: 'users#index'
  # these routes are for showing users a login form, logging them in, and logging them out.
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  get '/quiz' => 'users#quiz'
  resources :users

end
