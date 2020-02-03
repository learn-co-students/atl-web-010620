class DoctorsController < ApplicationController

    require 'faker'

    def index
        @doctors = Doctor.all

        @images  = ["1-doctor.jpg", "2-doctor.jpg", "3-doctor.jpg", "4-doctor.jpg", "5-doctor.jpg"]
        @random_no = rand(1...5)
        @random_image = @images[@random_no]
    end

    def show
        @doctor = Doctor.find(params[:id])
    end

    def new
        @doctor = Doctor.new   
    end

    def create
        @doctor = Doctor.create(doctor_params)
        redirect_to doctors_path
    end

    def edit
        @doctor = Doctor.find(params[:id])
    end

    def update
        @doctor = Doctor.find(params[:id])
        @doctor.update(doctor_params)

        redirect_to doctors_path
    end

    def destroy
        @doctor = Doctor.find(params[:id])
        @doctor.destroy

        redirect_to doctors_path
    end

    private

    def doctor_params
        params.require(:doctor).permit(:name, :specialty)
    end
end
