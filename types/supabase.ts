export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Admin: {
        Row: {
          adminId: string
          created_at: string
        }
        Insert: {
          adminId: string
          created_at?: string
        }
        Update: {
          adminId?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Admin_adminId_fkey"
            columns: ["adminId"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      Diseases: {
        Row: {
          Disease: string
          medicalPID: string
        }
        Insert: {
          Disease: string
          medicalPID: string
        }
        Update: {
          Disease?: string
          medicalPID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Diseases_medicalPID_fkey"
            columns: ["medicalPID"]
            isOneToOne: true
            referencedRelation: "MedicalHistory"
            referencedColumns: ["patientID"]
          }
        ]
      }
      Donation: {
        Row: {
          adminId: string
          deliveryCost: number | null
          donationDate: string | null
          donationId: string
          donorID: string | null
          eventId: string
          paymentDate: string | null
          quantity: number
          recipientID: string
        }
        Insert: {
          adminId: string
          deliveryCost?: number | null
          donationDate?: string | null
          donationId?: string
          donorID?: string | null
          eventId: string
          paymentDate?: string | null
          quantity?: number
          recipientID: string
        }
        Update: {
          adminId?: string
          deliveryCost?: number | null
          donationDate?: string | null
          donationId?: string
          donorID?: string | null
          eventId?: string
          paymentDate?: string | null
          quantity?: number
          recipientID?: string
        }
        Relationships: [
          {
            foreignKeyName: "Donation_adminId_fkey"
            columns: ["adminId"]
            isOneToOne: false
            referencedRelation: "Admin"
            referencedColumns: ["adminId"]
          },
          {
            foreignKeyName: "Donation_donorID_fkey"
            columns: ["donorID"]
            isOneToOne: false
            referencedRelation: "Donor"
            referencedColumns: ["PatientId"]
          },
          {
            foreignKeyName: "Donation_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "DonationEvent"
            referencedColumns: ["eventId"]
          },
          {
            foreignKeyName: "Donation_recipientID_fkey"
            columns: ["recipientID"]
            isOneToOne: false
            referencedRelation: "Recipient"
            referencedColumns: ["PatientId"]
          }
        ]
      }
      DonationEvent: {
        Row: {
          adminId: string | null
          "category ": string | null
          description: string | null
          endDate: string | null
          eventId: string
          location: string | null
          startDate: string | null
          title: string | null
        }
        Insert: {
          adminId?: string | null
          "category "?: string | null
          description?: string | null
          endDate?: string | null
          eventId?: string
          location?: string | null
          startDate?: string | null
          title?: string | null
        }
        Update: {
          adminId?: string | null
          "category "?: string | null
          description?: string | null
          endDate?: string | null
          eventId?: string
          location?: string | null
          startDate?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "DonationEvent_adminId_fkey"
            columns: ["adminId"]
            isOneToOne: false
            referencedRelation: "Admin"
            referencedColumns: ["adminId"]
          }
        ]
      }
      Donor: {
        Row: {
          PatientId: string
        }
        Insert: {
          PatientId: string
        }
        Update: {
          PatientId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Donor_PatientId_fkey"
            columns: ["PatientId"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      MedicalHistory: {
        Row: {
          created_at: string
          patientID: string
        }
        Insert: {
          created_at?: string
          patientID: string
        }
        Update: {
          created_at?: string
          patientID?: string
        }
        Relationships: [
          {
            foreignKeyName: "MedicalHistory_patientID_fkey"
            columns: ["patientID"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bloodType: string | null
          city: string | null
          country: string | null
          DoB: string | null
          full_name: string | null
          id: string
          nationalID: number | null
          phone: string | null
          postalCode: string | null
          street: string | null
          updated_at: string | null
          username: string | null
          website: string | null
          weight: number | null
        }
        Insert: {
          avatar_url?: string | null
          bloodType?: string | null
          city?: string | null
          country?: string | null
          DoB?: string | null
          full_name?: string | null
          id: string
          nationalID?: number | null
          phone?: string | null
          postalCode?: string | null
          street?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
          weight?: number | null
        }
        Update: {
          avatar_url?: string | null
          bloodType?: string | null
          city?: string | null
          country?: string | null
          DoB?: string | null
          full_name?: string | null
          id?: string
          nationalID?: number | null
          phone?: string | null
          postalCode?: string | null
          street?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Recipient: {
        Row: {
          PatientId: string
        }
        Insert: {
          PatientId: string
        }
        Update: {
          PatientId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Recipient_PatientId_fkey"
            columns: ["PatientId"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
