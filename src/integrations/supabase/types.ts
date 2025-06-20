export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      care_tasks: {
        Row: {
          completed: boolean
          created_at: string
          due_date: string
          id: string
          inputs: Json | null
          labor: Json | null
          notes: string | null
          task_type: string
          tree_id: string
          updated_at: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          due_date: string
          id?: string
          inputs?: Json | null
          labor?: Json | null
          notes?: string | null
          task_type: string
          tree_id: string
          updated_at?: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          due_date?: string
          id?: string
          inputs?: Json | null
          labor?: Json | null
          notes?: string | null
          task_type?: string
          tree_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          description: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          id: string
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      content: {
        Row: {
          content: string
          created_at: string | null
          created_by: string | null
          id: string
          status: string | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          status?: string | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          status?: string | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          contact: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          contact?: string | null
          email?: string | null
          id: string
          name: string
          phone?: string | null
        }
        Update: {
          contact?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          category: string
          date: string
          description: string | null
          id: string
          paymentmethod: string | null
          vendor: string | null
        }
        Insert: {
          amount: number
          category: string
          date: string
          description?: string | null
          id: string
          paymentmethod?: string | null
          vendor?: string | null
        }
        Update: {
          amount?: number
          category?: string
          date?: string
          description?: string | null
          id?: string
          paymentmethod?: string | null
          vendor?: string | null
        }
        Relationships: []
      }
      inventory: {
        Row: {
          categoryid: string | null
          cost: number | null
          dateadded: string
          id: string
          location: string | null
          name: string
          notes: string | null
          price: number
          quantity: number
          size: string | null
          supplierid: string | null
        }
        Insert: {
          categoryid?: string | null
          cost?: number | null
          dateadded: string
          id: string
          location?: string | null
          name: string
          notes?: string | null
          price?: number
          quantity?: number
          size?: string | null
          supplierid?: string | null
        }
        Update: {
          categoryid?: string | null
          cost?: number | null
          dateadded?: string
          id?: string
          location?: string | null
          name?: string
          notes?: string | null
          price?: number
          quantity?: number
          size?: string | null
          supplierid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_categoryid_fkey"
            columns: ["categoryid"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_supplierid_fkey"
            columns: ["supplierid"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price: string
          scientific_name: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price: string
          scientific_name?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: string
          scientific_name?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sales: {
        Row: {
          customerid: string | null
          date: string
          id: string
          items: Json
          notes: string | null
          paymentmethod: string | null
          total: number
        }
        Insert: {
          customerid?: string | null
          date: string
          id: string
          items: Json
          notes?: string | null
          paymentmethod?: string | null
          total: number
        }
        Update: {
          customerid?: string | null
          date?: string
          id?: string
          items?: Json
          notes?: string | null
          paymentmethod?: string | null
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_customerid_fkey"
            columns: ["customerid"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          contact: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          contact?: string | null
          email?: string | null
          id: string
          name: string
          phone?: string | null
        }
        Update: {
          contact?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assignedto: string | null
          completedat: string | null
          createdat: string
          description: string | null
          duedate: string | null
          id: string
          priority: string
          status: string
          title: string
        }
        Insert: {
          assignedto?: string | null
          completedat?: string | null
          createdat: string
          description?: string | null
          duedate?: string | null
          id: string
          priority?: string
          status?: string
          title: string
        }
        Update: {
          assignedto?: string | null
          completedat?: string | null
          createdat?: string
          description?: string | null
          duedate?: string | null
          id?: string
          priority?: string
          status?: string
          title?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          id: string
          location: string
          name: string
          project: string | null
          rating: number | null
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          location: string
          name: string
          project?: string | null
          rating?: number | null
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          location?: string
          name?: string
          project?: string | null
          rating?: number | null
          text?: string
          updated_at?: string
        }
        Relationships: []
      }
      trees: {
        Row: {
          age: number
          care_instructions: string
          category: string
          created_at: string
          health_status: string
          height: number
          id: string
          image_url: string | null
          name: string
          next_care_date: string
          notes: string
          number_of_plants: number
          planted_date: string
          source: string
          stock_quantity: number
          unit_price: number
          updated_at: string
        }
        Insert: {
          age: number
          care_instructions: string
          category: string
          created_at?: string
          health_status: string
          height: number
          id?: string
          image_url?: string | null
          name: string
          next_care_date: string
          notes: string
          number_of_plants?: number
          planted_date: string
          source: string
          stock_quantity?: number
          unit_price?: number
          updated_at?: string
        }
        Update: {
          age?: number
          care_instructions?: string
          category?: string
          created_at?: string
          health_status?: string
          height?: number
          id?: string
          image_url?: string | null
          name?: string
          next_care_date?: string
          notes?: string
          number_of_plants?: number
          planted_date?: string
          source?: string
          stock_quantity?: number
          unit_price?: number
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
    }
    Enums: {
      user_role: "admin" | "staff"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["admin", "staff"],
    },
  },
} as const
