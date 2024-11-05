import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, X } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    location: 'Downtown, New York',
    price: '$2,500/month',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    beds: 2,
    baths: 2,
    area: '1,200 sqft',
    coords: [40.7128, -74.0060],
    description: 'Luxurious apartment with modern amenities and stunning city views.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 2,
    title: 'Luxury Waterfront Condo',
    location: 'Marina District, San Francisco',
    price: '$3,800/month',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    beds: 3,
    baths: 2,
    area: '1,800 sqft',
    coords: [37.8199, -122.4783],
    description: 'Stunning waterfront property with panoramic bay views and premium finishes.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 3,
    title: 'Cozy Studio Apartment',
    location: 'South Beach, Miami',
    price: '$1,800/month',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    beds: 1,
    baths: 1,
    area: '650 sqft',
    coords: [25.7617, -80.1918],
    description: 'Perfect starter home in the heart of South Beach with modern amenities.',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ]
  },
];

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<null | typeof properties[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePropertyClick = (property: typeof properties[0]) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
  };

  return (
    <div className="bg-gray-50 py-12" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover our hand-picked selection of premium rental properties
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {properties.map((property) => (
              <div 
                key={property.id} 
                className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={property.image} alt={property.title} />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <p className="ml-2 text-sm text-gray-500">{property.location}</p>
                    </div>
                    <p className="mt-2 block text-xl font-semibold text-gray-900">{property.title}</p>
                    <p className="mt-3 text-2xl font-bold text-indigo-600">{property.price}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Bed className="h-5 w-5" />
                        <span className="ml-1">{property.beds} beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-5 w-5" />
                        <span className="ml-1">{property.baths} baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-5 w-5" />
                        <span className="ml-1">{property.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer 
              center={[39.8283, -98.5795]} 
              zoom={4} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {properties.map((property) => (
                <Marker 
                  key={property.id} 
                  position={property.coords as [number, number]}
                  eventHandlers={{
                    click: () => handlePropertyClick(property),
                  }}
                >
                  <Popup>
                    <div className="text-sm">
                      <p className="font-semibold">{property.title}</p>
                      <p>{property.price}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>

      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProperty.title}</h3>
                  <p className="text-gray-600">{selectedProperty.location}</p>
                </div>
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-6 relative">
                <img 
                  src={selectedProperty.images[currentImageIndex]} 
                  alt={`${selectedProperty.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex justify-center mt-4 gap-2">
                  {selectedProperty.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-700">{selectedProperty.description}</p>
                
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-gray-600">{selectedProperty.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-gray-600">{selectedProperty.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-gray-600">{selectedProperty.area}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-2xl font-bold text-indigo-600">{selectedProperty.price}</p>
                  <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}