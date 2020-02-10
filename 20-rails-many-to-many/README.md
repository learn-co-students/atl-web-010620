# Rails Many-to-Many Review

Today we'll review creating a many-to-many app example, creating the associations, validations, and forms needed to express this type of relationship between objects in Rails. 

## SWBATs 

- Create a many-to-many relationship in Rails 
- Create the correct associations between models
- Create and use a form that expresses a relationship 
- Operate on and do actions using model data

---

## Domain Example and Process: MeBay Shop

We'll use the example of buyers and sellers through projects to express a many-to-many relationship using Rails, and create a shop app. 

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
            - explore `form_with`, use `form_for`/ `form_tag` as needed

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


## Helpful Info
Here's a collection of helpful info that will allow us to express our many-to-many association a little better: 

