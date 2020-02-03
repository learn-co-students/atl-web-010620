# For my schema, I added the doctor_id to patients using [rails g migration add_doctor_id_to_patients doctor_id:integer]
# (and then did a migration) and removed it from my doctors table using rails g migration remove_doctor_id_from_doctors doctor_id:integer. 
# Look at the migrations to see what was produced. 

ActiveRecord::Schema.define(version: 2019_12_16_223105) do

  create_table "doctors", force: :cascade do |t|
    t.string "name"
    t.string "specialty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "condition"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "doctor_id"
  end

end
