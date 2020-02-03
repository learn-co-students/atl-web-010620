class RemoveDoctorIdFromDoctors < ActiveRecord::Migration[6.0]
  def change

    remove_column :doctors, :doctor_id, :integer
  end
end
