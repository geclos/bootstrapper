Rails.application.routes.draw do
  devise_for :users

  scope module: 'public' do
    root to: 'home#index'
  end

  scope module: 'api' do
    resources :posts
  end
end
