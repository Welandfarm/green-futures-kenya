
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, Heart } from "lucide-react";
import AuthButton from '@/components/AuthButton';
import NavigationDropdown from '@/components/NavigationDropdown';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const About = () => {
  // Fetch content from database
  const { data: content = {} } = useQuery({
    queryKey: ['about-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content')
        .select('id, title, content, type, status, created_by, created_at, updated_at');
      
      if (error) throw error;
      
      // Convert to object for easy access
      const contentObj: { [key: string]: { title: string; content: string } } = {};
      data?.forEach(item => {
        const key = item.title?.toLowerCase().replace(/\s+/g, '_') || '';
        contentObj[key] = { title: item.title || '', content: item.content || '' };
      });
      return contentObj;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-orange-500">Little</span>
                  <span className="text-green-600">Forest</span>
                </h1>
                <p className="text-sm text-gray-600">Nurturing Nature</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <AuthButton />
              <Button onClick={() => window.location.href = '/'} className="bg-orange-500 hover:bg-orange-600 text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-start">
          <div className="scale-125">
            <NavigationDropdown />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {content.about_little_forest?.title || 'About Little Forest'}
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            {content.about_little_forest?.content || 'Your trusted partner in creating green spaces and restoring our environment'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {content.about_content?.content || `At LittleForest Nursery, we grow and supply high-quality seedlings to help farmers thrive. From grafted avocados to tree tomatoes, passion fruit, ornamental plants, and indigenous trees, every seedling is nurtured with expert care and soil health in mind.

We believe in the power of trees to transform landscapes, restore ecosystems, and create sustainable livelihoods for communities across Kenya.`}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Forests Created</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Cultivation</h3>
                  <p className="text-gray-600">Every seedling is grown with care, ensuring healthy root systems and optimal growing conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Impact</h3>
                  <p className="text-gray-600">We work closely with local farmers and communities to restore ecosystems and create sustainable livelihoods.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">All our seedlings undergo rigorous quality checks to ensure the highest survival rates and healthy growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Grow Your Forest?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in creating a greener future. Whether you're looking for indigenous trees, fruit trees, or ornamental plants, we have the perfect seedlings for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = '/'} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Shop Now
            </Button>
            <Button 
              onClick={() => {
                const message = `Hello LittleForest! 🌱

I'd like to learn more about your nursery and how you can help with my project. Could we discuss:

- Available tree varieties
- Best planting practices for my area
- Bulk ordering options
- Expert consultation services

Looking forward to growing with you!`;
                
                const whatsappUrl = `https://wa.me/254108029407?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold">
                  <span className="text-orange-500">Little</span>
                  <span className="text-green-400">Forest</span>
                </span>
              </div>
              <p className="text-green-200 text-sm">
                Nurturing nature, growing futures. Your trusted partner for indigenous trees, fruit trees, and ornamental plants.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-green-200">
                <li><a href="/" className="hover:text-white">Shop with us</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-green-200">
                <li><a href="#" className="hover:text-white">Indigenous Trees</a></li>
                <li><a href="#" className="hover:text-white">Fruit Trees</a></li>
                <li><a href="#" className="hover:text-white">Ornamental Plants</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-green-200">
                <li>📱 WhatsApp: +254 108 029 407</li>
                <li>🌐 littleforest.co.ke</li>
                <li>📍 Kamureito Bomet</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-200 text-sm">
              © 2024 Little Forest. All rights reserved. | Nurturing nature, growing futures.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
