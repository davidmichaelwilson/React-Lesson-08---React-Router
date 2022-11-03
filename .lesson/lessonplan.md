# Lesson plan
  
---
In App.jsx:
```
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}/> 
        <Route path="/contact" element = {<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
```