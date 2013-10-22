get '/' do
  # Look in app/views/index.erb
  erb :index
end


post'/' do
Twitter.update(params[:tweet])

erb :index
end
