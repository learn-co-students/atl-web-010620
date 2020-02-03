# Rails Forms and Validations 
Let's get into Rails by building an app and implementing forms and validations. All practical application! 

## SWBATs
- Create a Rails app and follow conventions for efficiency 
- Create an association between two models using `collection-select`
- Create a layout and implement yielding throughout app 
- Implement error handling

## The Rails Process
Here's a general sense of the convention that we follow when creating Rails apps: 

- Create a new app: `rails new ________`
- CD into that app: `cd _____________` 
- Run your rails server: `rails s` 
- Follow the MVC pattern- 


    - MODEL: 
        - create a model: `rails g model TITLE attributes:data-type`
        - check migration- look at migrated files, update as necessary
        - run the migration: `rake db:migrate`


    - CONTROLLER:
        - create a controller: `rails g controller TITLES action1 action2`
            - create actions for the controller: 
                - 7 routes
                    - index
                    @thing = Thing.all 

                    - create
                    @thing = Thing.new(thing_params)
                    if thing.save
                    redirect_to @thing
                    else 
                    render 'new'

                    - new
                    @thing = Thing.new

                    - edit
                    @thing = Thing.find(params[:id])

                    - show
                    @thing = Thing.find(params[:id])

                    - update
                    @thing = Thing.find(params[:id])
                    @thing.update
                    redirect_to

                    - destroy
                    @thing = Thing.find(params[:id])
                    @thing.destroy
                    redirect_to

        - create routes: route.rb = add resources

    - VIEW: 
        - create layout with yield using `application.html.erb`
        <%= yield %>

        - create views to move users through app
            - edit, new, update, destroy should show form
            - explore form_with, use `form_for`/ `form_tag` as needed

        - decide if resources on `routes.rb` should be limited using only/except

- Add seed data 
    5.times do 
        Thing.create(variables)
    end

- rake db:seed to add new seed data to database

- Test your data
Open the console and click through your app to be sure your routes are working. 

- Rinse and repeat process for new associated model

- Build associations 
    - open model, add has many/belongs to macros
    - belongs_to is singular
    - use collection_select to associate via forms

- Add validations
    - occurs in the model and checks against booleans before moving forward
validates(:name, { presence: true, uniqueness: true })

- Add errors
    - want to add and create if validations fail
    - created using the flash hash: flash[:notice] = 'Thing created!'

- Refactor
    - using before action 
    - make views/controllers DRY