class PatientsController < ApplicationController

    def index
        @patients = Patient.all
    end

    def show
        @patient = Patient.find(params[:id])
    end

    def new
        @patient = Patient.new   
    end

    def create
        @patient = Patient.create(patient_params)
        redirect_to patients_path
    end

    def edit
        @patient = Patient.find(params[:id])
    end

    def update
        @patient = Patient.find(params[:id])
        @patient.update(patient_params)

        redirect_to patients_path
    end

    def destroy
        @patient = Patient.find(params[:id])
        @patient.destroy

        redirect_to patients_path
    end

    private

    def patient_params
        params.require(:patient).permit(:name)
    end


end