import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setProfile, setToken, setUser } from "@/redux/slice/userReducer"


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://news-cms-27-12-2024.onrender.com/api/v1/login",
        { email, password }
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        dispatch(setToken(res.data.token));
        dispatch(setProfile(res.data.data));
        dispatch(setUser(res.data.data.name));

        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("Bad Request: " + error.response.data.message);
        } else if (error.response.status === 404) {
          toast.error("Not Found: " + error.response.data.message);
        } else {
          toast.error("Something went wrong: " + error.response.data.message);
        }
      } else {
        toast.error("Network error. Please try again.");
      }
    }
    finally {
      setLoading(false); 
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
            <CardHeader>            
              <img src="https://indiasuperfast.com/images/logo/66adf3f0848e166adf313bcac7LOGO%2002.png" alt="logo" className="w-32 mx-auto" />
            </CardHeader>      
          <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>                  
                </div>
                <Input id="password" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="password"/>
              </div>
              <Button
                variant="destructive"
                type="submit"
                className="w-full bg-[#a20001] hover:bg-[#a20001]/90 cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Login"
                )}
              </Button>
            </div>            
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
